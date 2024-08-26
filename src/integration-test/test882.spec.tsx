
import { test, expect } from "@playwright/experimental-ct-react";
import App882 from "../example/App882.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App882 />);
  await expect(component).toContainText("Learn React");
});
