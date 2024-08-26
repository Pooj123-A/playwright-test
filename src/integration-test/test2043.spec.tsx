
import { test, expect } from "@playwright/experimental-ct-react";
import App2043 from "../example/App2043.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2043 />);
  await expect(component).toContainText("Learn React");
});
