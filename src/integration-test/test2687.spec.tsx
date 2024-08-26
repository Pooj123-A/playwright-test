
import { test, expect } from "@playwright/experimental-ct-react";
import App2687 from "../example/App2687.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2687 />);
  await expect(component).toContainText("Learn React");
});
