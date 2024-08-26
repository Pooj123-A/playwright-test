
import { test, expect } from "@playwright/experimental-ct-react";
import App925 from "../example/App925.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App925 />);
  await expect(component).toContainText("Learn React");
});
