class Posts::BulkController < ApplicationController
  before_action :set_posts

  def destroy
    @posts.destroy_all
    redirect_to posts_path
  end

  private

    def set_posts
      @posts = params[:all] ? Post.all : Post.where(id: params[:ids])
    end
end
