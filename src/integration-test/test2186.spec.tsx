
import { test, expect } from "@playwright/experimental-ct-react";
import App2186 from "../example/App2186.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2186 />);
  await expect(component).toContainText("Learn React");
});
