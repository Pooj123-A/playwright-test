
import { test, expect } from "@playwright/experimental-ct-react";
import App2933 from "../example/App2933.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2933 />);
  await expect(component).toContainText("Learn React");
});
