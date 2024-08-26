
import { test, expect } from "@playwright/experimental-ct-react";
import App841 from "../example/App841.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App841 />);
  await expect(component).toContainText("Learn React");
});