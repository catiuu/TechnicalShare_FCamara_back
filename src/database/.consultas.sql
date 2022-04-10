-- TODOS OS USERS E SUAS TECHS
select u.id, u.name, u."jobTitle", u.email, t.id, t.name from "Users" u, "UserTechnology" ut, "Technologies" t  
where u.id = ut."userId" and ut."technologyId"  = t.id 

-- TECNOLOGIAS DOS USERS COM 'Doe' NO NOME (independente do case)
select u.id, u."name", u."jobTitle", u.email, t.id, t.name from "Users" u, "UserTechnology" ut, "Technologies" t  
where u.id = ut."userId" and ut."technologyId"  = t.id and lower(u."name") like lower('%Doe%')

-- TECNOLOGIAS COM 'a' NO NOME (independente do case) E SEUS USERS
select u.id, u."name", u."jobTitle", u.email, t.id, t.name from "Users" u, "UserTechnology" ut, "Technologies" t  
where u.id = ut."userId" and ut."technologyId"  = t.id and lower(t."name") like lower('%a%')

-- TECNOLOGIAS COM 'a' NO NOME (independente do case) E SEUS USERS COM 'Doe' NO NOME (independente do case)
select u.id, u."name", u."jobTitle", u.email, t.id, t.name from "Users" u, "UserTechnology" ut, "Technologies" t  
where u.id = ut."userId" and ut."technologyId"  = t.id and lower(t."name") like lower('%a%') and lower(u."name") like lower('%doe%')

