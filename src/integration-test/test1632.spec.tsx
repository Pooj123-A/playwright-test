
import { test, expect } from "@playwright/experimental-ct-react";
import App1632 from "../example/App1632.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1632 />);
  await expect(component).toContainText("Learn React");
});
