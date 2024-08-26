
import { test, expect } from "@playwright/experimental-ct-react";
import App790 from "../example/App790.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App790 />);
  await expect(component).toContainText("Learn React");
});
