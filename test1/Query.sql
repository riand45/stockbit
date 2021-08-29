select
    UserChild.id,
    UserChild.UserName,
    UserParent.UserName as ParentUserName
from
    user as UserChild
left join
    user as UserParent
on
    UserChild.Parent = UserParent.`id`
order by
    UserChild.id asc
