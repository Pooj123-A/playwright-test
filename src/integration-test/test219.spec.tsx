
import { test, expect } from "@playwright/experimental-ct-react";
import App219 from "../example/App219.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App219 />);
  await expect(component).toContainText("Learn React");
});
