using System.Collections.Generic;
using System.Linq;
using CloneKabum.API.Models;

namespace CloneKabum.API.Repositories
{
    public class UserRepository
    {
        private static int _nextInt = 2;

        public static IList<User> Users = new List<User>
        {
            new User
            {
                Id = 1,
                Email = "zubemluano@gmail.com",
                Name = "Luano",
                Password = "loop"
            },
        };

        public static void AddUser(User user)
        {
            user.Id = _nextInt++;
            Users.Add(user);
        }

        public User GetByEmail(string email)
        {
            return Users.Where(x => x.Email.ToLower() == email.ToLower())
                .FirstOrDefault();
        }

        public User Get(int id) => Users.FirstOrDefault(u => u.Id == id);
    }
}