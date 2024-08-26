
import { test, expect } from "@playwright/experimental-ct-react";
import App2 from "../example/App2.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2 />);
  await expect(component).toContainText("Learn React");
});
