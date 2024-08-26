
import { test, expect } from "@playwright/experimental-ct-react";
import App476 from "../example/App476.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App476 />);
  await expect(component).toContainText("Learn React");
});
