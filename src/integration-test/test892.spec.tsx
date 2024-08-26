
import { test, expect } from "@playwright/experimental-ct-react";
import App892 from "../example/App892.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App892 />);
  await expect(component).toContainText("Learn React");
});
