
import { test, expect } from "@playwright/experimental-ct-react";
import App2753 from "../example/App2753.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2753 />);
  await expect(component).toContainText("Learn React");
});
