
import { test, expect } from "@playwright/experimental-ct-react";
import App2554 from "../example/App2554.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2554 />);
  await expect(component).toContainText("Learn React");
});
