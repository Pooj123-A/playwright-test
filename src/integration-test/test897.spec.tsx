
import { test, expect } from "@playwright/experimental-ct-react";
import App897 from "../example/App897.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App897 />);
  await expect(component).toContainText("Learn React");
});
