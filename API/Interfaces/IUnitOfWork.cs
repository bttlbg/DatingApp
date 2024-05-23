namespace API.Interfaces;

public interface IUnitOfWork
{
    IUserRepository UserRepository { get; }
    IMessageRepository MessageRepository { get; }
    ILikesRepository LikesRepository { get; }
    //IPhotoService PhotoService { get; }
    Task<bool> Complete();
    bool HasChanges();
}
