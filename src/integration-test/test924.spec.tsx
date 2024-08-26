
import { test, expect } from "@playwright/experimental-ct-react";
import App924 from "../example/App924.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App924 />);
  await expect(component).toContainText("Learn React");
});
