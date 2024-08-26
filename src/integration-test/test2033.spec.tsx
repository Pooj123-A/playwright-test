
import { test, expect } from "@playwright/experimental-ct-react";
import App2033 from "../example/App2033.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2033 />);
  await expect(component).toContainText("Learn React");
});
