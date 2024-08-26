
import { test, expect } from "@playwright/experimental-ct-react";
import App2569 from "../example/App2569.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2569 />);
  await expect(component).toContainText("Learn React");
});
