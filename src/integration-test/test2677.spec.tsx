
import { test, expect } from "@playwright/experimental-ct-react";
import App2677 from "../example/App2677.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2677 />);
  await expect(component).toContainText("Learn React");
});
