$(document).ready(function() {
    $('#user-form').on('submit', function(e) {
        e.preventDefault();
        
        let userId = $('#userId').val();
        if (!userId) return alert('Please enter a userId');
        
        // Get user info
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/' + userId,
            method: 'GET',
            success: function(user) {
                $('#user-info').html(`
                    <h2>User Information</h2>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                `);
                
                // Get user posts
                $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    method: 'GET',
                    data: { userId: userId },
                    success: function(posts) {
                        let postsHtml = '<h2>User Posts</h2>';
                        postsHtml += '<div id="posts-list">';
                        posts.forEach(post => {
                            postsHtml += `
                                <div class="post" data-postid="${post.id}">
                                    <h3>${post.title}</h3>
                                    <p>${post.body}</p>
                                    <button class="show-comments-btn">Show Comments</button>
                                    <div class="comments" id="comments-${post.id}"></div>
                                </div>
                            `;
                        });
                        postsHtml += '</div>';
                        $('#user-posts').html(postsHtml);
                    }
                });
            }
        });
    });

    // Event delegation for dynamically added elements
    $('#user-posts').on('click', '.show-comments-btn', function() {
        let postId = $(this).closest('.post').data('postid');
        let commentsDiv = $('#comments-' + postId);

        // If comments are already visible, hide them
        if (commentsDiv.is(':visible')) {
            commentsDiv.hide();
        } else {
            // Load comments if not already loaded
            if (commentsDiv.children().length === 0) {
                $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/comments',
                    method: 'GET',
                    data: { postId: postId },
                    success: function(comments) {
                        let commentsHtml = '<ul>';
                        comments.forEach(comment => {
                            commentsHtml += `
                                <li><strong>${comment.name}:</strong> ${comment.body}</li>
                            `;
                        });
                        commentsHtml += '</ul>';
                        commentsDiv.html(commentsHtml);
                    }
                });
            }
            commentsDiv.show();
        }
    });
});
