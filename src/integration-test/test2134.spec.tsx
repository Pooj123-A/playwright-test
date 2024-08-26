
import { test, expect } from "@playwright/experimental-ct-react";
import App2134 from "../example/App2134.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2134 />);
  await expect(component).toContainText("Learn React");
});
