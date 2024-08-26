
import { test, expect } from "@playwright/experimental-ct-react";
import App1029 from "../example/App1029.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1029 />);
  await expect(component).toContainText("Learn React");
});
