
import { test, expect } from "@playwright/experimental-ct-react";
import App801 from "../example/App801.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App801 />);
  await expect(component).toContainText("Learn React");
});