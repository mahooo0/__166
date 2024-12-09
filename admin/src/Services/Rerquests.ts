import axios from 'axios';
export interface PostHomeTitleBody {
    az: string;
    ru: string;
    en: string;
}
interface PostHomeTitle {
    title: PostHomeTitleBody;
}
export const GetHomeHeroTitle = async () => {
    const { data } = await axios.get(
        'http://localhost:5000/api/home/hero/title'
    );
    return data;
};

export const PostHomeHeroTitle = async ({ body }: { body: PostHomeTitle }) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/home/hero/title',
        body
    );
    return data;
};
export const GetCAntries = async () => {
    const { data } = await axios.get(
        'http://localhost:5000/api/home/hero/cantries'
    );
    return data;
};
export const PostCAntry = async ({ body }: { body: FormData }) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/home/hero/cantries',
        body
    );
    return data;
};
export const PutCantry = async ({
    id,
    body,
}: {
    id: string; // ID of the Cantry to update
    body: FormData;
}) => {
    try {
        const { data } = await axios.put(
            `http://localhost:5000/api/home/hero/cantries/${id}`, // Use PUT method with the Cantry ID
            body
        );
        return data;
    } catch (error) {
        console.error('Error updating Cantry:', error);
        throw error; // Re-throw the error to handle it in the caller
    }
};
export const deleteCantry = async (id: string) => {
    try {
        const res = await axios.delete(
            `http://localhost:5000/api/home/hero/cantries/${id}`
        );
        return res.data;
    } catch (error) {
        console.error('Error deleting Cantry:', error);
    }
};
//Services Text
export const GetServicesText = async () => {
    const { data } = await axios.get(
        'http://localhost:5000/api/statisticks/title'
    );
    return data;
};
export const PutServicesText = async (body: any) => {
    const { data } = await axios.put(
        'http://localhost:5000/api/statisticks/title',
        body
    );
    return data;
};
//Statistick
export const GetStatistick = async () => {
    const { data } = await axios.get('http://localhost:5000/api/statisticks');
    return data;
};
export const PostStatistick = async (body: any) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/statisticks',
        body
    );
    return data;
};
export const PutStatistick = async (body: any, id: string) => {
    const { data } = await axios.put(
        'http://localhost:5000/api/statisticks/' + id,
        body
    );
    return data;
};
export const DeleteStatistick = async (id: string) => {
    const { data } = await axios.delete(
        'http://localhost:5000/api/statisticks/' + id
    );
    return data;
};
//Partners
export const GetPartners = async () => {
    const { data } = await axios.get('http://localhost:5000/api/partners');
    return data;
};
export const PostPartners = async (body: any) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/partners',
        body
    );
    return data;
};
export const PutPartner = async ({
    id,
    body,
}: {
    id: string; // ID of the Cantry to update
    body: FormData;
}) => {
    try {
        const { data } = await axios.put(
            `http://localhost:5000/api/partners/${id}`, // Use PUT method with the Cantry ID
            body
        );
        return data;
    } catch (error) {
        console.error('Error updating Partner:', error);
        throw error; // Re-throw the error to handle it in the caller
    }
};
export const DeletePartner = async (id: string) => {
    const { data } = await axios.delete(
        'http://localhost:5000/api/partners/' + id
    );
    return data;
};

//services category
export const GetServicesCategoryes = async () => {
    const { data } = await axios.get(
        'http://localhost:5000/api/services/services-categories'
    );
    return data;
};
export const PostServicesCategory = async (body: any) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/services/services-categories',
        body
    );
    return data;
};
export const PutServicesCategory = async (
    id: string, // ID of the Cantry to update
    body: any
) => {
    try {
        const { data } = await axios.put(
            `http://localhost:5000/api/services/services-categories/${id}`, // Use PUT method with the Cantry ID
            body
        );
        return data;
    } catch (error) {
        console.error('Error updating Partner:', error);
        throw error; // Re-throw the error to handle it in the caller
    }
};
export const DeleteServicesCategory = async (id: string) => {
    const { data } = await axios.delete(
        `http://localhost:5000/api/services/services-categories/${id}`
    );
    return data;
};
//services
export const GetServices = async () => {
    const { data } = await axios.get('http://localhost:5000/api/services');
    return data;
};
export const PostServices = async (body: any) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/services/',
        body
    );
    return data;
};
export const PutServices = async (
    id: string, // ID of the Cantry to update
    body: any
) => {
    try {
        const { data } = await axios.put(
            `http://localhost:5000/api/services/${id}`, // Use PUT method with the Cantry ID
            body
        );
        return data;
    } catch (error) {
        console.error('Error updating Partner:', error);
        throw error; // Re-throw the error to handle it in the caller
    }
};
export const DeleteServices = async (id: string) => {
    const { data } = await axios.delete(
        `http://localhost:5000/api/services/${id}`
    );
    return data;
};
