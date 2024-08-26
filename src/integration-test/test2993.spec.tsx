
import { test, expect } from "@playwright/experimental-ct-react";
import App2993 from "../example/App2993.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2993 />);
  await expect(component).toContainText("Learn React");
});
