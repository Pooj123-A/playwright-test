
import { test, expect } from "@playwright/experimental-ct-react";
import App2344 from "../example/App2344.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2344 />);
  await expect(component).toContainText("Learn React");
});