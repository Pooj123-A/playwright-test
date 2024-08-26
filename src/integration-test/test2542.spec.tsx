
import { test, expect } from "@playwright/experimental-ct-react";
import App2542 from "../example/App2542.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2542 />);
  await expect(component).toContainText("Learn React");
});
