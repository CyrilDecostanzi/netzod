"use client";

import React, { useEffect, useState, useContext } from "react";
import { getData } from "@/lib/fetch_actions/getData";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";

import { PostContext } from "@/context/PostContext";
import { Textarea } from "@/components/ui/textarea";

export const TitleForm = () => {
	const { post, setPost } = useContext(PostContext);
	const [categories, setCategories] = useState([]);

	const getCategories = async () => {
		const { data: categoriesData } = await getData("categories");
		setCategories(categoriesData);
	};

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<form className="grid md:grid-cols-7 gap-4 w-full mx-auto">
			<Input
				type="text"
				placeholder="Titre"
				className="text-xl p-6 md:col-span-4 rounded-xl"
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				value={post?.title || ""}
			/>
			<Select
				onValueChange={(value) => {
					if (!value) return;
					setPost({ ...post, category_id: parseInt(value) });
				}}
				value={post?.category_id?.toString()}
			>
				<SelectTrigger className="text-xl p-6 md:col-span-3 rounded-xl z-20">
					<SelectValue placeholder="Catégorie" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Catégories</SelectLabel>
						{categories.map((category: any) => (
							<SelectItem key={category.id} value={category.id.toString()}>
								{category.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<Textarea
				placeholder="Décrivez votre sujet..."
				className="text-xl p-6 md:col-span-7 rounded-xl"
				rows={5}
				onChange={(e) => setPost({ ...post, description: e.target.value })}
				value={post?.description || ""}
			/>
		</form>
	);
};
