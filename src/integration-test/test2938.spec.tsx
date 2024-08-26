
import { test, expect } from "@playwright/experimental-ct-react";
import App2938 from "../example/App2938.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2938 />);
  await expect(component).toContainText("Learn React");
});
