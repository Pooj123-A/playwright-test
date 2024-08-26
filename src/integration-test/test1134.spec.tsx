
import { test, expect } from "@playwright/experimental-ct-react";
import App1134 from "../example/App1134.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1134 />);
  await expect(component).toContainText("Learn React");
});
