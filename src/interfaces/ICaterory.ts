export interface ICategory {
    id: number;
    parent_id: number | null;
    name: string;
    slug: string;
    description: string;
    hide_description: number;
    image_path: string;
    icon_class: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    lft: number;
    rgt: number;
    depth: number;
    type: string;
    is_for_permanent: number;
    active: number;
    image_url: string;
    parent?: ICategory | null;   // quan hệ cha
    children: ICategory[];       // quan hệ con
}

export interface ILink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginationLinks {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
}

export interface IMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: ILink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface ICategoriesResponse {
    data: ICategory[];
    links: PaginationLinks;
    meta: IMeta;
}
