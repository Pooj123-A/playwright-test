
import { test, expect } from "@playwright/experimental-ct-react";
import App2371 from "../example/App2371.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2371 />);
  await expect(component).toContainText("Learn React");
});
