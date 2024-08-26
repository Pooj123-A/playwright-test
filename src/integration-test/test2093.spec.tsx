
import { test, expect } from "@playwright/experimental-ct-react";
import App2093 from "../example/App2093.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2093 />);
  await expect(component).toContainText("Learn React");
});
