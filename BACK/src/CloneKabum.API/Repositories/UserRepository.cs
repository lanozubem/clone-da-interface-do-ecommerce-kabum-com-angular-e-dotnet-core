using System.Collections.Generic;
using System.Linq;
using CloneKabum.API.Models;

namespace CloneKabum.API.Repositories
{
    public class UserRepository
    {
        private static int _nextInt = 4;

        /*
        * 1 - Diretor
        * 2 - Gerente
        * 3 - Colaborador
        */

        public static IList<User> Users = new List<User>
        {

            new User
            {
                Id = 1,
                Type = 1,
                Email = "lucas@eu.com",
                Name = "Lucas",
                Password = "123"
            },

            new User
            {
                Id = 2,
                Type = 2,
                Email = "mariana@eu.com",
                Name = "Mariana",
                Password = "123"
            },

            new User
            {
                Id = 3,
                Type = 2,
                Email = "gabriel@eu.com",
                Name = "Gabriel",
                Password = "123"
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