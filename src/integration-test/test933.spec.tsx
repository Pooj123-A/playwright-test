
import { test, expect } from "@playwright/experimental-ct-react";
import App933 from "../example/App933.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App933 />);
  await expect(component).toContainText("Learn React");
});
