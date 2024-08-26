
import { test, expect } from "@playwright/experimental-ct-react";
import App2235 from "../example/App2235.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2235 />);
  await expect(component).toContainText("Learn React");
});
