
import { test, expect } from "@playwright/experimental-ct-react";
import App2963 from "../example/App2963.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2963 />);
  await expect(component).toContainText("Learn React");
});
