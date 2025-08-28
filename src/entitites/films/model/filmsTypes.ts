type ThemeType =
    | 'VAMPIRE_THEME'
    | 'COMICS_THEME'
    | 'CLOSES_RELEASE'
    | 'FAMILY'
    | 'LOVE_THEME'
    | 'ZOMBIE_THEME'
    | 'CATASTROPHE_THEME'
    | 'KIDS_ANIMATION_THEME'

export interface Theme {
    theme: ThemeType
    name?: string
    img?: string
}
