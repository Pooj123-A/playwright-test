
import { test, expect } from "@playwright/experimental-ct-react";
import App534 from "../example/App534.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App534 />);
  await expect(component).toContainText("Learn React");
});
