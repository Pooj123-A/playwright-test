
import { test, expect } from "@playwright/experimental-ct-react";
import App1586 from "../example/App1586.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1586 />);
  await expect(component).toContainText("Learn React");
});
