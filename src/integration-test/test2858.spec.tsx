
import { test, expect } from "@playwright/experimental-ct-react";
import App2858 from "../example/App2858.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2858 />);
  await expect(component).toContainText("Learn React");
});
