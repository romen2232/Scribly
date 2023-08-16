import { t } from 'i18next'
import {User} from '../utils/types'
import { Avatar } from '@nextui-org/react'
import { AiOutlineRight } from 'react-icons/ai'

export interface IUserItemProps{
    user: User,
    leaderboardPosition?: number
    leaderboardExp?: number
    follow?: boolean
    children?: React.ReactNode
}

const UserItem = ({user, children}: IUserItemProps) => {
    const {username, profilePhoto, experience} = user
    return (
        <div className="flex items-center justify-between border-b-2 p-4">
            <div className='flex gap-6 items-center'>

                <Avatar src={profilePhoto} name={username??''} showFallback size="md" />
                <div>
                        <p className="text-lg font-bold">{username}</p>
                        <p className="text-sm text-gray-500">{experience+' '+t('TotalXp')}</p>
                </div>
            </div>

            {children??<AiOutlineRight className='text-gray-500'/>}

        </div>
    )
    }

export default UserItem