
import { test, expect } from "@playwright/experimental-ct-react";
import App2647 from "../example/App2647.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2647 />);
  await expect(component).toContainText("Learn React");
});
