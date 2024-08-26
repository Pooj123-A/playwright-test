
import { test, expect } from "@playwright/experimental-ct-react";
import App2464 from "../example/App2464.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2464 />);
  await expect(component).toContainText("Learn React");
});
