
import { test, expect } from "@playwright/experimental-ct-react";
import App257 from "../example/App257.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App257 />);
  await expect(component).toContainText("Learn React");
});
