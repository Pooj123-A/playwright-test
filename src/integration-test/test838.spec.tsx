
import { test, expect } from "@playwright/experimental-ct-react";
import App838 from "../example/App838.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App838 />);
  await expect(component).toContainText("Learn React");
});
