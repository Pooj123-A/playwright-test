
import { test, expect } from "@playwright/experimental-ct-react";
import App2067 from "../example/App2067.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2067 />);
  await expect(component).toContainText("Learn React");
});
